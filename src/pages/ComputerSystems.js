import React from "react";
import "../css/trails.css";
import Display from "../assets/projects_assets/computersystem/compsystem.png";
import ControlUnit from "../assets/projects_assets/computersystem/ControlUnit.png";
import MainDecoder from "../assets/projects_assets/computersystem/MainDecoder.png";
import SingleCycleProcessor from "../assets/projects_assets/computersystem/SingleCycleProcessor.png";
import TruthTable from "../assets/projects_assets/computersystem/truthtable.jpg";
import CSC258Download from "../assets/projects_assets/computersystem/data_path_imm.zip";

export default function ComputerSystems() {
  return (
    <div className="trails-body">
      <div className="trails-title">
        Computer Systems: A Collection of Projects
      </div>
      <div className="trails-date">September 2023 - Present</div>
      <div className="trails-prev-imgs">
        <img src={Display} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-p">
        This project is a little bit different from the rest, it is a collection
        of smaller projects I've done with relation to Computer Architecture,
        Operating Systems and more. This will include my earliest work from
        September 2023 to who knows when! My goal with all of this computer
        system knowledge is to one day build an operating system.
      </div>
      <div className="trails-p">
        I would also like to credit the scaffolding and base to UofT, these are
        projects done in the following courses: CSC258
      </div>
      <div className="trails-b">
        CSC258 Computer Architecture: Instruction Support on a
        Single Cycle Microprocessor Data Path
      </div>
      <div className="trails-p">
        This is from a lab done in CSC258 where we were tasked with accomodating
        the andi and ori instructions for our current MIPS data path.
        <br></br>
        <br></br>
        In this lab, I changed the ALU, added a control signal and modified the
        data path. You can also view the assembly code I wrote along with the
        test vectors.
        <br></br>
        <br></br>
        The circuit is made with Logism Evolution so if you want to try it out,
        please download it <a href="http://www.cburch.com/logisim/">here.</a>
      </div>
      <div className="trails-b">Some Related Images and Such:</div>
      <div className="trails-prev-imgs">
        <img src={TruthTable} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-prev-imgs">
        <img src={SingleCycleProcessor} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-prev-imgs">
        <img src={ControlUnit} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-prev-imgs">
        <img src={MainDecoder} alt="" className="img-indiv-f"></img>
      </div>
      <a href={CSC258Download} download="data_path_imm.zip">
        {" "}
        Download Here{" "}
      </a>
      <div className="trails-b">CSC209 System Programming: The Kernel</div>
      <div className="trails-i">Coming soon...</div>
      <div className="trails-b">CSC343 Databases: Database Technology</div>
      <div className="trails-i">Coming soon...</div>
      <div className="trails-b">
        CSC369 Operating Systems: Unix Style Mini OS
      </div>
      <div className="trails-i">Coming soon...</div>
    </div>
  );
}
