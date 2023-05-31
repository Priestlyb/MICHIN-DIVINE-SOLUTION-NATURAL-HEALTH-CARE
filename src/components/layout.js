import React, { useEffect, useState } from "react";
import Header from "./header/header";
import Features from "./features/features";
import Whatweoffer from "./whatweoffer/whatweoffer";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div>

      {isLoading ? (
        <div className="loading">
        <h1 className="l">W</h1>
        <h1 className="o">e</h1>
        <h1 className="a">l</h1>
        <h1 className="d">c</h1>
        <h1 className="i">o</h1>
        <h1 className="n">m</h1>
        <h1 className="g">e</h1>
        <h1 className="d1">!</h1>
        <h1 className="d2">!</h1>
        <h1 className="d3">!</h1>
      </div>

      ) : (
        <div>
          <Header/>
          <Features />
          <Whatweoffer />
        </div>

      )}

    </div>
  )
}

export default Layout