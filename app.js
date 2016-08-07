const fs = require('fs');

fs.readdir(__dirname, (err, files) =>{
  if(err) throw err;
  let list = files.map((file) =>{
     file.trim()
     return file.split(' ').join('-');
   })

  for (var i = 0; i < files.length; i++) {
    fs.rename(files[i], list[i], (err) => {
      if(err){
        return err;
      }
    });
  }
})
