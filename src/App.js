import React from 'react';
import classes from './App.module.css';

function App() {
  return (
      <div className={classes.grid}>
        <div className={classes.subgrid1}>
          <div className={classes.subgrid1_itemA + ' ' + classes.subgrid_item}>A</div>
          <div className={classes.subgrid1_itemB + ' ' + classes.subgrid_item}>B</div>
          <div className={classes.subgrid1_itemC + ' ' + classes.subgrid_item}>C</div>
          <div className={classes.subgrid1_itemD + ' ' + classes.subgrid_item}>D</div>
          <div className={classes.subgrid1_itemE + ' ' + classes.subgrid_item}>E</div>
        </div>
        <div className={classes.subgrid2}>
          <div className={classes.subgrid2_itemF + ' ' + classes.subgrid_item}>F</div>
        </div>
        <div className={classes.subgrid3}>
          <div className={classes.subgrid3_itemG + ' ' + classes.subgrid_item}>G</div>
          <div className={classes.subgrid3_itemH + ' ' + classes.subgrid_item}>H</div>
        </div>
      </div>
  );
}

export default App;
