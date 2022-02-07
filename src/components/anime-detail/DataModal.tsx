import React, { useEffect, useState } from "react";
import { IFullAnimeDetailQuery } from "../pages/__generated__/FullDetail.types";
import modalStyles from "../../../styles/Modal.module.css";
import loaderStyles from "../../../styles/Loader.module.css";
import dynamic from "next/dynamic";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

type Props = {
  loading: boolean;
  setShowModal: (val: boolean) => void;
  data: IFullAnimeDetailQuery | undefined;
};

const DataModal = ({ loading, data, setShowModal }: Props) => {
  console.log(loading, data);
  useEffect(() => {
    const cb = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };
    document.addEventListener("keydown", cb);

    return () => document.removeEventListener("keydown", cb);
  }, []);

  return (
    <div className={modalStyles.modal}>
      <div className={modalStyles.modalContent}>
        <div className={modalStyles.modalBody}>
          {loading && <div className={loaderStyles.loader} />}
          {data && <DynamicReactJson src={data.Media!} />}
        </div>
      </div>
    </div>
  );
};

export default DataModal;
