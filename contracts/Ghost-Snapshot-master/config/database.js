const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// const url = `mongodb+srv://Sadmin:fxxHWM7pbI7tL9Bn@snapshot.o35fi.mongodb.net/seedify?retryWrites=true&w=majority`;
// const url = `mongodb+srv://SnapshotMaster:<password>@cluster0.dnnrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const url = `mongodb+srv://SnapshotMaster:5GC495XjmQwEXCrB@cluster0.dnnrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(`${url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    // mongoose.pluralize(null);
    // mongoose.set('debug',true);

    console.log('database connected successfully');
  })
  .catch((error) => {
    console.log('error in connecting with database ', error);
  });
