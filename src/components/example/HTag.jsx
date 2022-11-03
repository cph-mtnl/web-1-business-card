import styles from "./HTag.module.css";

export default function HTag({ hType, hMessage }) {
  console.log(hType);
  const CustomHTag = hType;

  return (
    <CustomHTag className={(styles.hDefault, styles["d" + hType])}>
      {hMessage}
    </CustomHTag>
  );
}
