import { Link } from "react-router-dom";



const HackerRepublic = () => {
  const id = 'Wasp'
  const days = 56
  const users = 11
  return (
    <main className="px-5 h-[100vh] bg-blue-800 flex items-center justify-center">
      <div className="text-center text-white items-center justify-center">
        <h1 className="text-2xl lg:text-4xl mb-8 font-semibold">Welcome to Hacker Republic, citizen {id}</h1>
        <p className="text-base lg:text-base mb-8 ">It has been {days} days since your last visit. There are {users} citizens online</p>
        <p><span className="text-base">Do you want to </span>
          <span className="font-semibold">(a) Browse the Forum </span>
          <span className="font-semibold">(b) Send a Message </span>
          <span className="font-semibold">(c) Search the Archive </span>
          <Link to='/message'><span className="font-semibold hover:font-extrabold">(d) Talk </span></Link>
          <span className="font-semibold">(e) Get Laid?</span>
        </p>
      </div>
    </main>
  );
};

export default HackerRepublic;
