import { useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import { Subject, debounceTime } from 'rxjs';
declare var ace: any, document: any, _: any, R: any;
function T1() {
  //const { contactId } = useParams();
  //const [editor, seteditor] = useState();

  let sb = new Subject();

  window.console.log = function (data: any) {
    document.getElementById('demo').innerHTML += '<pre>'+JSON.stringify(data, null, 4)+'</pre>';
  };
  useEffect(() => {
    sb.pipe(debounceTime(1000)).subscribe((resp: any) => {
      if (resp != '') {
        ed.getSession().getSelection().clearSelection();
        document.getElementById('demo').innerHTML = '';
        let xx = new Function('_', 'R', resp);
        xx(_, R);
      }
    });

    let ed = ace.edit('javascript-editor');
    ed.getSession().setMode('ace/mode/javascript');
    ed.setTheme('ace/theme/monokai');

    

ed.setOptions({
    enableBasicAutocompletion: true
})
    ed.session.on('change', function (delta: any) {
      sb.next(ed.getValue());
    });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div id="javascript-editor" style={{ height: '100vh' }}></div>
        </div>
        <div
          className="col-6 text-bg-dark"
          style={{ height: '100vh', 'overflow-x': 'scroll' }} id="demo"
        >

        </div>
      </div>
    </div>
  );

  
}
export default T1;
