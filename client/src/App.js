import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequirementsPage from "./pages/Requirements/Requirements";
import Main from "./pages/Main/Main";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


function App() {

  const [requirementsModal, setRequirementsModal] = useState(false);
  const state = useSelector((state) => state.requirementsSlice.value);
  useEffect(() => {
    if (state.edit) {
      alert("작성 중인 요구 사항 명세서가 있습니다.");
    }
  }, []);
  return (
    <div className="App">
      {requirementsModal && (
        <RequirementsPage
          requirementsModal={requirementsModal}
          setRequirementsModal={setRequirementsModal}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              requirementsModal={requirementsModal}
              setRequirementsModal={setRequirementsModal}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
