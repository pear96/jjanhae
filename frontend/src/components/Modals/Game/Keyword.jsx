import React, { useState, useEffect, useRef } from "react";
import styles from "./Keyword.module.css";
import { ReactComponent as GameIcon } from "../../../assets/icons/game.svg";
import { ReactComponent as CelebrateIcon } from "../../../assets/icons/celebrate.svg";
import { ReactComponent as QuestionIcon } from "../../../assets/icons/question.svg";
import { ReactComponent as Sendclock } from "../../../assets/icons/sendclock.svg";
import { ReactComponent as RedClock } from "../../../assets/icons/redclock.svg";
import { ReactComponent as ProblemIcon } from "../../../assets/icons/problem.svg";
import UserApi from "../../../api/UserApi";
import { ReactComponent as SirenIcon } from "../../../assets/icons/siren.svg";
import { ReactComponent as PuzzleIcon } from "../../../assets/icons/puzzle.svg";
import { ReactComponent as CancleIcon } from "../../../assets/icons/cancleorange.svg";
import { ReactComponent as NoIcon } from "../../../assets/icons/no.svg";
import { ReactComponent as ForbiddenIcon } from "../../../assets/icons/forbidden.svg";
import { ReactComponent as FireworksIcon } from "../../../assets/icons/fireworks.svg"; 
import { ReactComponent as ConfetiIcon } from "../../../assets/icons/confeti.svg"; 
import { ReactComponent as ClapIcon } from "../../../assets/icons/clap.svg"; 
import { ReactComponent as ThumbupIcon } from "../../../assets/icons/thumbup.svg"; 




const Keyword = (props) => {
    const {open, close, confirmMyAnswer, confirmTargetGameName, mode, targetNickName,gameId,sirenTargetNickName,correctPeopleName} = props;
    const [answer, setAnswer] = useState("");
    const [targetGameName, setTargetGameName] = useState("");
    console.log(targetNickName);
    console.log(mode);
    console.log("modal open");

    const handleGameNameInput = (event) => {
      setAnswer(event.target.value);
    }

    const handleTargetInput = (event) => {
      setTargetGameName(event.target.value);
    }

    const handleClose = (gameId, nextmode) => {
        close(nextmode);
    }

    const confirm = () => {
    if(answer!==""&&answer!==" ") {
        confirmMyAnswer(answer, gameId);
        setAnswer("");
        }
    }

    const confirmTarget = () => {
      console.log("here")
      if(targetGameName!==""&&targetGameName!==" ") {
        confirmTargetGameName(targetGameName);
        setTargetGameName("");
      }
    }

    return (
        <div
        className={open ? `${styles.openModal} ${styles.modal}` : styles.modal}
      >
        {open ? 
        <>
        {mode === "answer" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <PuzzleIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.yanginfoText}>
                        <p className={styles.yangtext}>?????????  <span className={styles.warnText}>?????????</span>??? ???????????????!</p>
                    </div>
                    <form>
                        <input className={styles.inputKeyword}
                                placeholder="????????????"
                                value={answer}
                                onChange={handleGameNameInput}
                                onKeyPress = {(event)=> {
                                if(event.key==="Enter") {
                                    confirm();
                                }
                                }}>
                                </input>
                    </form>
                </div>
                <div>
                    <button className={styles.yangconfirmBtn} onClick={confirm}>
                        {" "}
                        ??????{" "}
                    </button>
                    <button className={styles.confirminputBtn} onClick={()=> {handleClose("1","answer")}}>
                        ?????????
                    </button>
                </div>
                </main>
          </section>

        ) : mode === "correct" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <ClapIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.informCorrectText}>
                        <p className={styles.correctText}> <ConfetiIcon className={styles.smallicon}/>????????? ???????????? ???????????????!!<ConfetiIcon className={styles.smallicon}/></p>
                        <p className={styles.correctText}> <ConfetiIcon className={styles.smallicon}/>??????????????????~!!<ConfetiIcon className={styles.smallicon}/></p>
                    </div>
                </div>
                <button className={`${styles.confirmBtnOutline} ${styles.confirmBtn}`} onClick={()=>{handleClose("1","correct")}}>
                    {" "}
                    ??????~{" "}
                </button>
                </main>
          </section>
        ) : mode === "assign" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.informBorder}>
                    <QuestionIcon className={styles.icon}/>
                    <div className={styles.infoText}>
                        <span className={styles.targetText}>{targetNickName}</span>
                        <span className={styles.text}>   ??????</span>
                        <p className={styles.text}> <span className={styles.warnText}>?????????</span>??? ???????????????!</p>
                    </div>
                </div>
                <div className={styles.informBorder}>
                    <form>
                        <input className={styles.inputKeyword}
                                placeholder="????????????"
                                value={targetGameName}
                                onChange={handleTargetInput}
                                onKeyPress = {(event)=> {
                                if(event.key==="Enter") {
                                    confirmTarget();
                                }
                                }}>
                                </input>
                    </form>
                </div>
                <button className={styles.confirmBtn} onClick={confirmTarget} onKeyPress = {(event)=> {
                    if(event.key==="Enter") {
                        confirmTarget();
                    }
                }}>
                    {" "}
                    ????????? ??????{" "}
                </button>
                </main>
          </section>
        ) : mode === "wait" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.icon}>
                    <RedClock className={styles.sendClockIcon}/>
                    {/* <button className={styles.orangeCancleBtn} onClick={close}>
                      <CancleIcon className={styles.orangeCancleBtn}/>
                    </button> */}
                </div>
                <div className={styles.informBorder}>
                    <div className={styles.infoText}>
                        <p className={styles.text}>??????????????? ????????????   <span className={styles.warnText}>?????????</span>??? ??????????????????</p>
                        <p className={styles.text}>?????? ???????????????  <span className={styles.warnText}>?????????</span> ????????? ?????????</p>
                        <p className={styles.text}>???????????? <span className={styles.gameText}>??????</span>??? ???????????????</p>
                        <p className={styles.text}><span className={styles.yellowText}>????????? ??????????????????</span></p>
                    </div>
                </div>
                </main>
          </section>
        ) : mode === "start" ? (
          <section className={styles.modalForm}>
            <header>
            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <QuestionIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.infoText}>
                        <p className={styles.text}><span className={styles.purpleText}>????????? ??????</span>??? ???????????????~!</p>
                        <p className={styles.text}>??????????????? <span className={styles.greenText}>????????????</span> ????????? ??????????????? <span className={styles.warnText}>?????????</span>??? ???????????????</p>
                        <p className={styles.text}>????????? ????????? ?????????<span className={styles.warnText}>?????????</span>??? ???????????????</p>
                        <p className={styles.text}>?????? <span className={styles.yellowText}>??????</span>???????????????~</p>
                    </div>
                </div>
                </main>
          </section>
        ) : mode === "letsplay" ? (
          <section className={styles.modalForm}>
            <header>
            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <QuestionIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.yanginfoText}>
                        <p className={styles.text}>?????????  <span className={styles.warnText}>?????????</span>??? ???????????? </p>
                        <p className={styles.text}><span className={styles.gameText}>??????</span>??? ?????? ?????????<span className={styles.warnText}>?????????</span>??? ????????????</p>
                        <p className={styles.text}>?????? ??? <span className={styles.yellowText}>????????????</span>??? ?????????</p>
                        <p className={styles.text}><span className={styles.warnText}>?????????</span>??? ???????????????</p>
                    </div>
                </div>
                </main>
          </section>
        )
         :  mode === "wrong" ? (
          <section className={styles.modalForm}>
            <header>
            </header>
                <main className={styles.main}>
                <div className={styles.failicon}>
                    <NoIcon className={styles.icon}/>
                </div>
                <div className={styles.failBorder}>
                    <div className={styles.failText}>
                        <p className={styles.text}> <span className={styles.warnText}>???????????????.. </span></p>
                        <p className={styles.text}>?????? ??????????????????</p>
                    </div>
                </div>
                <button className={styles.retryBtn} onClick={()=>{handleClose("1","answer")}}>
                    {" "}
                    ?????????{" "}
                </button>
                </main>
          </section>
        ) :  mode === "assignForbidden" ? (
          <section className={styles.modalForm}>
            <header>
            </header>
                <main className={styles.main}>
                <div className={styles.informBorder}>
                    <ProblemIcon className={styles.icon}/>
                    <div className={styles.infoForbiddenText}>
                        <span className={styles.targetText}>{targetNickName}</span>
                        <span className={styles.text}>   ??????</span>
                        <p className={styles.text}> <span className={styles.warnText}>?????????</span>??? ???????????????!</p>
                    </div>
                </div>
                <div className={styles.informBorder}>
                    <form>
                        <input className={styles.inputKeyword}
                                placeholder="????????????"
                                value={targetGameName}
                                onChange={handleTargetInput}
                                onKeyPress = {(event)=> {
                                if(event.key==="Enter") {
                                    confirmTarget();
                                }
                                }}>
                        </input>
                            </form>
                </div>
                <button className={styles.confirmBtn} onClick={confirmTarget} >
                    {" "}
                    ????????? ??????{" "}
                </button>
                </main>
          </section>
        )  :  mode === "waitForbidden" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.icon}>
                    <RedClock className={styles.sendClockIcon}/>
                </div>
                <div className={styles.informBorder}>
                    <div className={styles.infoText}>
                        <p className={styles.text}>??????????????? ????????????<span className={styles.warnText}>?????????</span>??? ??????????????????</p>
                        <p className={styles.text}>?????? ???????????????  <span className={styles.warnText}>?????????</span> ????????? ?????????</p>
                        <p className={styles.text}>???????????? <span className={styles.gameText}>??????</span>??? ???????????????</p>
                        <p className={styles.text}><span className={styles.yellowText}>????????? ??????????????????</span></p>
                    </div>
                </div>
                </main>
          </section>
        ): mode === "letsplayForbidden" ? (
          <section className={styles.modalForm}>
            <header>
            </header>
                <main className={styles.main}>
                <div className={styles.forbiddenicon}>
                    <QuestionIcon className={styles.icon}/>
                </div>
                <div className={styles.forbiddeninformBorder}>
                    <div className={styles.forbiddeninfoText}>
                        <p className={styles.text}>????????? <span className={styles.warnText}>?????????</span>??? ?????????????????? </p>
                        <p className={styles.text}>?????? ??? <span className={styles.yellowText}>????????????</span>??? ????????? ???????????????</p>
                        <p className={styles.text}>????????? ????????? <span className={styles.noText}>??????</span>??? ?????? ??? ????????????</p>
                        <p className={styles.text}>?????? ???????????? <span className={styles.warnText}>?????????</span> ??? ????????????</p>
                        <p className={styles.text}>???????????? <span className={styles.orangeText}>?????????<SirenIcon className={styles.sirenicon}/></span>??? ???????????????!!
                        </p>
                    </div>
                </div>
               
                </main>
          </section>
        ) :mode === "answerForbidden" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                <PuzzleIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.infoText}>
                        <p className={styles.text}>?????????  <span className={styles.warnText}>?????????</span>??? ???????????????!</p>
                    </div>
                    <form>
                        <input className={styles.inputKeyword}
                                placeholder="????????????"
                                value={answer}
                                onChange={handleGameNameInput}
                                onKeyPress = {(event)=> {
                                if(event.key==="Enter") {
                                    confirm();
                                }
                                }}>
                                </input>
                    </form>
                </div>
                <div>
                <button className={styles.confirminputBtn} onClick={confirm}>
                    {" "}
                    ??????{" "}
                </button>
                <button className={styles.confirminputBtn} onClick={()=> {handleClose("2","answerForbidden")}}>
                    ?????????
                </button>
                </div>
                </main>
          </section>
        ) :mode === "yousayForbidden" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.wingicon}>
                    <SirenIcon className={styles.wingwingicon}/>
                </div>
                <div className={styles.informBorder}>
                    <div className={styles.infoText}>
                        <p className={styles.alertText}>??????!!!</p>
                        <p className={styles.alertText}>?????? <span className={styles.saywarnText}>?????????</span>??? ???????????????!!!!</p>
                    </div>
                </div>
                <button className={styles.confirmBtn} onClick={handleClose}>
                    {" "}
                    ?????????{" "}
                </button>
                </main>
          </section>
        ) :mode === "someonesayForbidden" ? (
          <section className={styles.modalForm}>
          <header>

            </header>
                <main className={styles.main}>
                <div className={styles.wingicon}>
                    <SirenIcon className={styles.wingwingicon}/>
                </div>
                <div className={styles.informBorder}>
                    <div className={styles.infoText}>
                        <p className={styles.alertText}><span className={styles.targetText}>{sirenTargetNickName}</span>?????? <span className={styles.saywarnText}>?????????</span>??? ??????????????????!!!!</p>
                        <p className={styles.alertText}>?????? <span className={styles.celebrateText}>??????</span>??? ??????????????????!!!!</p>

                    </div>
                </div>
                <button className={styles.confirmBtn} onClick={handleClose}>
                    {" "}
                    ????????????{" "}
                </button>
                </main>
          </section>
        ) : mode === "startForbidden" ? (
          <section className={styles.modalForm}>
            <header>
            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <ForbiddenIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.infoText}>
                        <p className={styles.text}><span className={styles.purpleText}>????????? ??????</span>??? ???????????????~!</p>
                        <p className={styles.text}>??????????????? <span className={styles.greenText}>????????????</span> ????????? ??????????????? <span className={styles.warnText}>?????????</span>??? ??????????????????</p>
                        <p className={styles.text}>?????? ???????????????  <span className={styles.warnText}>?????????</span>??? ????????? ?????????</p>
                        <p className={styles.text}>???????????? <span className={styles.gameText}>??????</span>??? ???????????????</p>
                    </div>
                </div>
                </main>
          </section>
        )  : mode === "correctForbidden" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <ClapIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.informCorrectText}>
                        <p className={styles.correctText}> <ConfetiIcon className={styles.smallicon}/>????????? ???????????? ???????????????!!<ConfetiIcon className={styles.smallicon}/></p>
                        <p className={styles.correctText}> <ConfetiIcon className={styles.smallicon}/>??????????????????~!!<ConfetiIcon className={styles.smallicon}/></p>
                    </div>
                </div>
                <button className={`${styles.confirmBtnOutline} ${styles.confirmBtn}`} onClick={()=>{handleClose("1","correct")}}>
                    {" "}
                    ??????~{" "}
                </button>
                </main>
          </section>
        )  : mode === "already" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <ThumbupIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.informCorrectText}>
                        <p className={styles.correctText}>?????? ?????????  <span className={styles.saywarnText}>?????????</span>??? ???????????????!!</p>
                        <p className={styles.correctText}> ??????????????????~!!</p>
                    </div>
                </div>
                <button className={`${styles.confirmBtnOutline} ${styles.confirmBtn}`} onClick={()=>{handleClose("1","correct")}}>
                    {" "}
                    ??????{" "}
                </button>
                </main>
          </section>
        )  :  mode === "alreadyForbidden" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <ThumbupIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.informCorrectText}>
                        <p className={styles.correctText}> <ConfetiIcon className={styles.smallicon}/>????????? ?????? <span className={styles.saywarnText}>?????????</span>??? ???????????????!!<ConfetiIcon className={styles.smallicon}/></p>
                        <p className={styles.correctText}> <ConfetiIcon className={styles.smallicon}/>??????????????????~!!<ConfetiIcon className={styles.smallicon}/></p>
                    </div>
                </div>
                <button className={`${styles.confirmBtnOutline} ${styles.confirmBtn}`} onClick={()=>{handleClose("1","correct")}}>
                    {" "}
                    ??????{" "}
                </button>
                </main>
          </section>
        )  :  mode === "someoneCorrect" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <ThumbupIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.informCorrectText}>
                        <p className={styles.correctText}> <span className={styles.targetText}>{correctPeopleName}</span>?????? <span className={styles.saywarnText}>?????????</span>??? ???????????????!!</p>
                        <p className={styles.correctText}> <span className={styles.celebrateText}>????????? ???????????</span></p>
                    </div>
                </div>
                <button className={`${styles.confirmBtnOutline} ${styles.confirmBtn}`} onClick={()=>{handleClose("1","answer")}}>
                    {" "}
                    ??????{" "}
                </button>
                </main>
          </section>
        )  :  mode === "someoneCorrectForbidden" ? (
          <section className={styles.modalForm}>
            <header>

            </header>
                <main className={styles.main}>
                <div className={styles.yangicon}>
                    <ThumbupIcon className={styles.icon}/>
                </div>
                <div className={styles.yanginformBorder}>
                    <div className={styles.informCorrectText}>
                        <p className={styles.correctText}> <span className={styles.targetText}>{correctPeopleName}</span>?????? <span className={styles.saywarnText}>?????????</span>??? ???????????????!!</p>
                        <p className={styles.correctText}> <span className={styles.celebrateText}>????????? ???????????</span></p>
                    </div>
                </div>
                <button className={`${styles.confirmBtnOutline} ${styles.confirmBtn}`} onClick={()=>{handleClose("2","answerForbidden")}}>
                    {" "}
                    ??????{" "}
                </button>
                </main>
          </section>
        ) :
          null}
         </>
           : null }
      </div>
    );
}

export default Keyword;
