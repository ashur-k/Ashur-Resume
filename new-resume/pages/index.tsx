import { GetServerSideProps, GetStaticPropsContext } from 'next'
import { services } from '../data'


const Home = ({services}) => {
  // console.log('service:',services)
  return (
    <div>
      <h1 className="text">Hello World</h1>
    </div>
  )
}

export default Home

// export const getServerSideProps = async (context:GetServerSideProps) => {
  
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// } 

export const getStaticProps = async (
  
  context:GetStaticPropsContext
  
  ) => {
  
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  return {
    props:{
      services: data.services,
    }
  }
} 