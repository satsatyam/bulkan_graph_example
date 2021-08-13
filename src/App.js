import OrgChart from './chart';

function App() {

  return (
    <div style={{ height: '100%' }}>
      {/* <OrgChart nodes = {[{id:"1", name:'Status'}]} /> */}
      <OrgChart   nodes={
        [
          { id: "1", name: "Amber McKenzieAA", title: "CEO", img: "https://cdn.balkan.app/shared/1.jpg" },
          { id: "2", pid: "1", name: "Ava Field", title: "IT Manager", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: "3", pid: "1", name: "Rhys Harper", title: "Marketing Team Lead", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: "4", pid: "2", name: "Carol Foster", title: "Junior Developer", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: "5", pid: "2", name: "Blake Morris", title: "Senior Developer", img: "https://cdn.balkan.app/shared/5.jpg" },
          { id: "6", pid: "3", name: "Erin Grant", title: "Junior Marketing", img: "https://cdn.balkan.app/shared/6.jpg" },
          { id: "7", pid: "3", name: "Avery Hughes", title: "Senior MArketing", img: "https://cdn.balkan.app/shared/7.jpg" }
        ]} />

    </div>
    // <div style={{height: '100%'}}>

    //     <OrgChart nodes={
    //       [{id: 1, name: "Name1", title: "Tytle1"}, 
    //       {id: 2, pid: 1, name: "Name2", title: "Tytle2"},
    //       {id: 3, pid: 1, name: "Name3", title: "Tytle3"},
    //       {id: 4, pid: 2, name: "Name3", title: "Tytle3"},
    //       {id: 5, pid: 2, name: "Name3", title: "Tytle3"},
    //       {id: 6, pid: 3, name: "Name3", title: "Tytle3"},
    //       {id: 7, pid: 3, name: "Name3", title: "Tytle3"},
    //       {id: 8, pid: 4, name: "Name3", title: "Tytle3"},
    //       {id: 9, pid: 4, name: "Name3", title: "Tytle3"},
    //       {id: 10, pid: 5, name: "Name3", title: "Tytle3"},
    //       {id: 11, pid: 5, name: "Name3", title: "Tytle3"},
    //       {id: 12, pid: 6, name: "Name3", title: "Tytle3"},
    //       {id: 13, pid: 6, name: "Name3", title: "Tytle3"},
    //       {id: 14, pid: 7, name: "Name3", title: "Tytle3"},
    //       {id: 15, pid: 7, name: "Name3", title: "Tytle3"}]
    //     } />
    //   </div>
  )
}

export default App
