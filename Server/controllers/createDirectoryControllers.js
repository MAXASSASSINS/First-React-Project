import * as fs from "fs";
export const createDirectory = (req, res) => {
  const directoryCount = req.body.directoryCount;
  const directoryPath = req.body.directoryPath;
  const initialName = req.body.initialName;
  console.log(directoryCount);
  console.log(directoryPath);
  for (let i = 1; i <= directoryCount; i++) {
    let fullPath = directoryPath + "/" + initialName + " " + i;
    fs.mkdir(fullPath, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("New directory successfully created.");
      }
    });
  }
  res.status(200).json({message: "createDirectory Route is working"});
};
