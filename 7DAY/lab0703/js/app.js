
import  PolytectLec  from './PolytectLec.js';
import  util  from './utility.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;
util.log("내가 만든 임포트 익스포트 데이터")

const pt = new PolytectLec();
util.log(`current hour is ${pt.getCurrentHour()}`);
util.log(`lectures of Polytech are ${pt.getLectures()}`);

// util.log(getTime());
// util.log(getCurrentHour());
// util.log(`getTime is ${getTime()}`);
// log(`current hour ${getCurrentHour()}`);

// const logger = new myLogger2();
// log(`lectures of Poly are ${logger.getLectures()}`);
