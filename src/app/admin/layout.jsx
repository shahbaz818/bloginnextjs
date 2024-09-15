
import Sidebar from "@/components/adminComponents/Sidebar"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

export default function Layout({children}){
    return (
        <>
        <div className="flex">
            <ToastContainer theme="dark"/>
            <Sidebar/>
            <div className="flex flex-col w-full">
                <div className="bg-slate-100 flex justify-between items-center w-full py-3 max-h-[60px] px-12 border-b border-black">
                    <h2 className="text-xl text-blue-500">Admin Panel</h2>
                </div>
                {children}
            </div>
        </div>
        
        </>
    )

}