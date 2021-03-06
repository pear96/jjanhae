import React, { createRef, useState } from "react";
import { ReactComponent as CancelIcon } from "../../../assets/icons/cancel.svg";
import styles from "./ReserveMusic.module.css";

const ReserveMusic = ({ open, onClose, onSubmit }) => {
  const [singer, setSinger] = useState("");
  const [song, setSong] = useState("");
  const singerRef = createRef();
  const songRef = createRef();

  const handleInput = (e) => {
    e.preventDefault();
    setSinger(singerRef.current.value);
    setSong(songRef.current.value);
  };

  const handleClick = () => {
    // const music = `${singer}${song}`;
    console.log(singer);
    console.log(song);
    onSubmit(singer, song);
    onClose();
  };
  return (
    <div
      className={open ? `${styles.openModal} ${styles.modal}` : styles.modal}
    >
      {open ? (
        <section className={styles.modalForm}>
          <div className={styles.btnRow}>
            <h1 className={styles.title}>노래 예약</h1>
            <button className={styles.closeBtn} onClick={onClose}>
              <CancelIcon width="20" height="20" />
            </button>
          </div>

          <form className={styles.inputData}>
            <input
              className={styles.singerInput}
              ref={singerRef}
              placeholder="가수"
              onChange={handleInput}
            />
            <input
              className={styles.songInput}
              ref={songRef}
              placeholder="노래 제목"
              onChange={handleInput}
            />
          </form>
          <div className={styles.registBtnRow}>
            <button className={styles.registBtn} onClick={handleClick}>
              접수
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default ReserveMusic;
