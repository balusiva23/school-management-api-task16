const express = require('express');
const app = express();
const routes = require('./routes');
require('./db');

app.use(express.json());
app.use('/api', routes);
app.get('/',(req,res)=>{
  res.send("working")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
