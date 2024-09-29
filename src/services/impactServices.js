import { handleDownload } from "./fileUtils";
import { getHelmets, getImpacts } from "./apiClient";

// Fetches all Impacts from database and produces a csv file which is downloaded
export const impactsToCsv = async () => {
  const { data: impacts, success: s1 } = await getImpacts();
  const { data: helmets, success: s2 } = await getHelmets();
  //const { data: impacts } = await client.models.Impact.list({include: ["helmet"]});
  function mergeHelmetData(helmets, impacts) {
    // Create a map of helmets for quick lookup
    const helmetMap = helmets.reduce((acc, helmet) => {
      acc[helmet.HelmetID] = {
        HelmetID: helmet.HelmetID,
        Alias: helmet.Alias || "N/A",
        impacts: [],
      };
      return acc;
    }, {});
    // Add impacts to their respective helmets
    impacts.forEach((impact) => {
      if (helmetMap[impact.HelmetID]) {
        helmetMap[impact.HelmetID].impacts.push({
          SortKey: impact.SortKey,
          Force: impact.Force,
          Direction: impact.Direction,
          createdAt: impact.createdAt,
        });
      }
    });
    // Convert the map back to an array
    return Object.values(helmetMap);
  }

  const mergedObject = mergeHelmetData(helmets, impacts);
  console.log("mergedObject", mergedObject);
  // Construct array of data rows with header as first row
  let rows = [
    ["Helmet ID", "Helmet Alias", "Impact Id", "Force", "Direction", "Date"],
  ];
  for (const obj of mergedObject) {
    for (const i of obj.impacts) {
      // Currently only keeping all characters after the # in Impact#<XYZ> as it had issues with csv formatting
      rows.push([
        obj.HelmetID,
        obj.Alias,
        i.SortKey.split("#")[1],
        i.Force,
        i.Direction,
        i.createdAt,
      ]);
    }
  }

  // Build csv string from data rows
  let csvContent = "data:text/csv;charset=utf-8,";
  rows.forEach(function (rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  // Encode and download
  let encodedUri = encodeURI(csvContent);
  handleDownload("HIGS_data_export.csv", encodedUri);
};
