import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div key={item.id} className={styles.itemContainer}>
        <div className={styles.imageContainer}>
        <img
        className={styles.image}
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
          alt=""
        />
        </div>
        <div className={styles.ameContainer}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.amount}>
          {item.amount} {item.unit}
        </div>
        </div>
      </div>
    </div>
  );
}
