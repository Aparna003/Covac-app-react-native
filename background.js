import BackgroundJob from 'react-native-background-job';

const backgroundJob = {
  jobKey: 'myJob',
  job: () => console.log('Running in background'),
};

BackgroundJob.register(backgroundJob);

var backgroundSchedule = {
  jobKey: 'myJob',
};

BackgroundJob.schedule(backgroundSchedule)
  .then(() => console.log('Success'))
  .catch((err) => console.err(err));
