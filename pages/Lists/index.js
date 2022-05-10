import Link from 'next/link';
import styles from '../../styles/List.module.css'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { lists: data },
  };
};


export default function Lists({ lists }) {
  console.log(lists);

  return (
    <div>
      <h1>All Ninjas</h1>
      {lists.map((list) => (
        <Link key={list.id} href={'/Lists/' + list.id}>
          <a className={styles.single}>
            <h3>{list.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
