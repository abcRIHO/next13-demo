import axios from 'axios';

interface Data {
  userId: number;
  name: string;
  address: string;
}

async function getData() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  return res;
}

const About = async () => {
  const data = await getData();

  return (
    <>
      {data?.data?.map((i) => {
        return (
          <>
            <div>
              <span>userId: {i.id}</span>
            </div>
            <div>
              <span>name: {i.name}</span>
            </div>
            <div>
              <span>email: {i.email}</span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default About;
