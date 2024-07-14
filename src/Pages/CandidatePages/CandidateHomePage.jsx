import DragDropComponent from "../../Components/DragDropComponent.jsx";
import DefaultLayout from "../../Layouts/DefaultLayout.jsx";

export default ()=> {
  function callback(){
    console.log("Hi");
  }
  return (
    <div>
      <DefaultLayout>
        <div className="flex justify-center items-center">

        <DragDropComponent/>
        </div>
      </DefaultLayout>
    </div>
  );
};
