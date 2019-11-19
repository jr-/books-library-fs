// /client/App.js
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    console.log('here');
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch('http://localhost:5000/books/')
      .then((data) => data.json())
      .then((res) => {
        console.log('lala', res);
        this.setState({ data: res.response })});
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
        <div>
          <Grid container direction="column" spacing={1}>
            <Grid item container justify="center" alignItems="center" alignContent="center" direction="row" xs={12}>
              <Grid item container justify="center" sm={2}>
                <div>SUPERO</div>
              </Grid>
              <Grid item sm={8}>
                  <TextField fullWidth
                    id="input-with-icon-textfield"
                    label="Título, autor ou ISBN"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
              </Grid>
              <Grid item container justify="center" sm={2}>
                  <Button variant="outlined">Buscar</Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div>YEAR FILTER</div>
            </Grid>
            <Grid item xs={12}>
              {this.simpleTable(data)}
            </Grid>
          </Grid>
        </div>
        
    );
  }

  simpleTable(data) {
    return <Paper width='100%' overflowX='auto'>
      <Table minWidth='650' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell align="right">Autor</TableCell>
            <TableCell align="right">Editora</TableCell>
            <TableCell align="right">Ano</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (<TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell align="right">{row.author_name}</TableCell>
            <TableCell align="right">{row.publisher_name}</TableCell>
            <TableCell align="right">{row.year}</TableCell>
            <TableCell align="right">AAA</TableCell>
          </TableRow>))}
        </TableBody>
      </Table>
    </Paper>;
  }
}

export default App;