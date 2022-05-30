import Link from "next/link";
import { Product } from "../../types/Product";

import styles from "./productitem.module.css";

type ProductItemProps = {
  product: Product;
  mainColor: string;
  secondColor: string;
};

export const ProductItem = ({
  product,
  mainColor,
  secondColor,
}: ProductItemProps) => {
  return (
    <Link href={`/b7burger/product/${product.id}`}>
      <a className={styles.container}>
        <div className={styles.head} style={{ background: secondColor }}></div>
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={product.image} alt="Burger" />
          </div>

          <div className={styles.catName}>{product.categoryName}</div>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price} style={{ color: mainColor }}>
            {product.price}
          </div>
        </div>
      </a>
    </Link>
  );
};
