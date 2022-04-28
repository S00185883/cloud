import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [answer, setAnswer] = useState("");
  const [count, setCounter] = useState();
  let instancesCount = [];
  var numbers = []; // new empty array

  var min, max, r, n, p;

  min = 1;
  max = 10;
  r = 1; // how many numbers you want to extract

  for (let i = 0; i < r; i++) {
    do {
      n = Math.floor(Math.random() * (max - min + 1)) + min;
      p = numbers.includes(n);
      if (!p) {
        numbers.push(n);
      }
    } while (p);
  }

  console.log(numbers);

  useEffect(() => {
    instancesCount += 1;
    console.log({ instancesCount });
  }, []);
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const rndInt = randomIntFromInterval(1, 6);
  const userAction = async () => {
    const id = 1;
    await fetch(
      "https://hmui533tpk.execute-api.eu-west-1.amazonaws.com/PROD/entries/" +
        email +
        "/" +
        name +
        "/" +
        age +
        "/" +
        answer +
        "/" +
        numbers
    );
    console.log(email + name + age + id);
  };

  return (
    <form onSubmit={userAction}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="name-input"
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="age-input"
            name="age"
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Answer</FormLabel>
            <RadioGroup
              name="gender"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              row
            >
              <FormControlLabel
                key="FIFA"
                value="FIFA"
                control={<Radio size="small" />}
                label="FIFA"
              />
              <FormControlLabel
                key="NATO"
                value="NATO"
                control={<Radio size="small" />}
                label="NATO"
              />
              <FormControlLabel
                key="ASEAN"
                value="ASEAN"
                control={<Radio size="small" />}
                label="ASEAN"
              />
              <FormControlLabel
                key="FBI"
                value="FBI"
                control={<Radio size="small" />}
                label="FBI"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;
