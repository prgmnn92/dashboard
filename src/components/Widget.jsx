import React from "react";

import { FadeLoader } from "react-spinners";

const Widget = ({ children, loading }) => {
  return (
    <div className="mb-6 px-4 py-6 bg-white rounded-xl text-slate-500 text-sm drop-shadow-md">
     { loading ? (
     <div className="w-full h-12 flex justify-center">

         <FadeLoader loading={loading} color="#a855f7" height={10} radius={2}/>
     </div>
     )
     : children}
    </div>
  );
};

export default Widget;
