import * as fs from "fs";
export const createFile = (req, res) => {
  const fileCount = req.body.fileCount;
  const filePath = req.body.filePath;
  const fileExtension = req.body.fileExtension;
  const initialName = req.body.initialName;
  // console.log(fileCount);
  // console.log(filePath);
  // console.log(fileExtension);
  //   const filePath = "/Users/mohd.shadab/desktop/1.txt";
  // /Users/mohd.shadab/Desktop
  for (let i = 1; i <= fileCount; i++) {
    let fullPath = filePath + "/" + initialName + i;
    if (fileExtension[0] == ".") {
      fullPath += fileExtension;
    } else {
      fullPath += "." + fileExtension;
    }
    
    if (!fs.existsSync(fullPath))
      fs.writeFile(fullPath, "", (err) => {
        if (err) console.log(err);
        else console.log("file is created successfully");
      });
    else console.log("file already present");
  }
  res.status(200).json({ message: "createFile route is working" });
};
