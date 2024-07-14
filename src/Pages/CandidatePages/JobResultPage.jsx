import { useLocation } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout";


export default function JobResultPage() {
    const {state } = useLocation();
    return (

        <div>
            <DefaultLayout>
                <h1 className="text-">Matched Results</h1>
                <div className="my-">

                    <ul className=" mx-3 flex-row">
                        {
                            state && state.map((item) => {
                                return <li
                                    className="flex  justify-between my-3 py-3 bg-slate-300 rounded-lg  text-center cursor-pointer hover:bg-slate-400 hover:scale-105">
                                    <p className="px-3">{item.title}</p>

                                </li>

                            })
                        }


                    </ul>


                </div>
            </DefaultLayout >
        </div>
    );

};