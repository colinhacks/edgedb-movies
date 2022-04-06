import {query} from '../query';

// import beautify from 'json-beautify';

export const getServerSideProps = async () => {
  const props = await query();
  return {
    props: {
      query: '',
      result: props,
    },
  };
};

const preStyle = {
  // width: '600px',
  padding: '15px 25px',
  // borderRadius: '8px',
  backgroundColor: '#f1f1f1',
  margin: 0,

  overflowY: 'scroll',
  // border: '2px solid #888888',
} as const;
export default function TodosPage(props: {query: string; result: any}) {
  return (
    <div
      style={{
        // width: '600px',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `body {margin:0};`}}></style>
      {/* <pre style={{...preStyle, borderBottom: '3px solid #888888'}}>
        {props.query}
      </pre> */}
      <pre style={{...preStyle, flex: 1}}>
        {JSON.stringify(props.result, null as any, 2)}
      </pre>
    </div>
  );
}
