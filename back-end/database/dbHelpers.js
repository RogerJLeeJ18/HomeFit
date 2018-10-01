// require pg-promise
const pgp = require('pg-promise')();
//require the config js to get the libpass
const { libPass } = require('../config');

const connection = {
  host: 'pellefant.db.elephantsql.com', // server name or IP address;
  port: 5432,
  database: 'jeunwozz',
  user: 'jeunwozz',
  password: libPass,
};

const db = pgp(connection);

module.exports = {
  // get user information
  getUserInfoByName: (username) => db.any(`
  SELECT * FROM users
  WHERE name = $1
  `, [username]),

  // gets the user dietary information based on the user id
  getUserDietByUserId: (userId) => db.any(`
    SELECT name, type FROM dietary_restrictions 
    INNER JOIN user_dietary ON (dietary_restrictions.id = user_dietary.id_dietary_restrictions 
    AND user_dietary.id_user = $1)
    `, [userId]),

  // need to get the exercises
  getExerciseByMuscleAndDiff: (muscleId, difficulty) => db.any(`
    SELECT * FROM exercises
    WHERE id_muscle_group = $1 AND difficulty < $2
    `, [muscleId, difficulty + 1]),

  // need to get the completed exercises first cardio then i will do str will be basically the same
  getCompCardioByUserId: (userId) => db.any(`
    SELECT * FROM completed_cardio
    WHERE id_user = $1
  `, [userId]),

  getCompStrByUserId: (userId) => db.any(`
    SELECT * FROM completed_str
    WHERE id_user = $1
  `, [userId]),

  // realised we may need to grab the exercises by their id as well
  getExerciseById: (exerciseId) => db.any(`
    SELECT * FROM exercises
    WHERE id = $1
  `, [exerciseId]),

  getUserById: (userId) => db.any(`
    SELECT * FROM users
    WHERE id = $1
  `, [userId]),

  getExercisesFromExerciseWorkoutsByUserId: (userId) => db.any(`
    SELECT exercises FROM exercises_workouts
    WHERE id_user = $1
  `, [userId]),

  insertIntoExerciseWorkoutsByUserIdAndArrayOfJson: (userId, arrayOfJson) => db.any(`
    INSERT INTO exercises_workouts (id_user, exercises) VALUES ( $1, array $2 ::json[])
  `, [userId, arrayOfJson]),

  addNewUser: (name, weight, numPushUps, jogDist, age, sex, height, squatComf, goals) => db.any(`
    INSERT INTO users 
    (name, weight, num_push_ups, jog_dist, age, sex, height, squat_comf, all_sets, workout_completes, goals)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, 0, 0, $9)
  `, [name, weight, numPushUps, jogDist, age, sex, height, squatComf, goals])

};