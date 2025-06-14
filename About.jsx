// img
import group from '../../assets/image/useables/sparkle-home.JPG';
// team Data
// import teamData from '../../assets/data/teamData';

import StaticHeader from '../../components/StaticHeader/StaticHeader';
import Useable from '../../components/Useable/Useable';
import ChairWomenMessage from '../Features/introduction/ChairWomenMessage';

const About = () => {
  return (
    <div className='bg-[#CCE0FF]'>
      <StaticHeader />
      <div className="body-container">
        <Useable
          message={"Sparkle by CYC"}
          mainText={"Empowering Tomorrow's Sparkling Leaders Today"}
          subText={"Let Your Child Sparkle"}
        />
        <div className='pb-10 w-[90%] m-auto space-y-20'>

          {/* grid */}
          <div className='grid lg:grid-cols-12 lg:grid-rows-12 gap-5 lg:max-h-[510px]'>

            {/* Left content box */}
            <div className='bg-white lg:col-span-5 lg:row-span-12 p-10 space-y-5 lg:space-y-10 rounded-3xl max-lg:order-2'>
              <div>
                <span className='text-red-500 text-sm font-semibold'>How it Started</span>
                <h2 className='text-lg lg:text-4xl font-semibold'>
                  Our Dream is <br /> Global Learning Transformation
                </h2>
              </div>
              <div>
                <p className='text-sm text-gray-700'>
                  <span className='italic text-gray-900'>Sparkle Kids Academy</span>, founded by <strong>Sneha Raut Thapa</strong>, is dedicated to grooming children for the future by offering a wide range of training programs. Inspired by her love for children and the desire to provide what her generation missed, Sneha created Sparkle to help kids develop essential life skills and confidence. Through courses in public speaking, dance, art, and personal grooming, Sparkle Kids Academy is committed to empowering the next generation with the resources they need to succeed.
                </p>
              </div>
            </div>

            {/* Center image box */}
            <div className='bg-white lg:col-span-7 lg:row-span-6 rounded-3xl max-lg:order-1'>
              <img
                src={group}
                alt="team-img"
                className="w-full h-[350px] object-cover object-center rounded-3xl"
              />
            </div>

            {/* Stats cards */}
            <div className='bg-white lg:col-span-7 lg:row-span-6 rounded-3xl max-lg:order-3'>
              <div className='flex flex-wrap p-5 items-center justify-center gap-5'>

                <div className='px-3 py-4 w-[200px] bg-gray-50 rounded-2xl'>
                  <h2 className='text-lg font-bold'>1+</h2>
                  <p className='text-[12px] text-gray-700'>Years Experience</p>
                </div>

                <div className='px-3 py-4 w-[200px] bg-gray-50 rounded-2xl'>
                  <h2 className='text-lg font-bold'>20+</h2>
                  <p className='text-[12px] text-gray-700'>Successful Events</p>
                </div>

                <div className='px-3 py-4 w-[200px] bg-gray-50 rounded-2xl'>
                  <h2 className='text-lg font-bold'>100+</h2>
                  <p className='text-[12px] text-gray-700'>Positive Reviews</p>
                </div>

                <div className='px-3 py-4 w-[200px] bg-gray-50 rounded-2xl'>
                  <h2 className='text-lg font-bold'>500+</h2>
                  <p className='text-[12px] text-gray-700'>Successful Stories</p>
                </div>
              </div>
            </div>

          </div>

          {/* Chairwoman message section */}
          <ChairWomenMessage />

          {/* Vision & Mission */}
          <div className='flex max-lg:flex-wrap justify-between rounded-lg overflow-hidden gap-5 p-10 bg-white'>

            {/* Vision */}
            <div className='bg-gray-50 w-full rounded-3xl p-5 space-y-5'>
              <span className='text-red-500 text-sm font-semibold'>Our Vision</span>
              <h2 className='text-lg lg:text-4xl font-semibold'>
                Empowering Lives <br />Through Education
              </h2>
              <p className='text-sm text-gray-700'>
                Our vision is to become a leading educational and training academy for children, redefining childhood education through creativity and innovation.
              </p>
            </div>

            {/* Mission */}
            <div className='bg-gray-50 w-full rounded-3xl p-5 space-y-5'>
              <span className='text-red-500 text-sm font-semibold'>Our Mission</span>
              <h2 className='text-lg lg:text-4xl font-semibold'>
                Learning for All, <br />Everywhere
              </h2>
              <p className='text-sm text-gray-700'>
                Our mission is to revolutionize early childhood education in Nepal by offering high-quality, hands-on learning experiences tailored to the unique needs and interests of young learners. Through our training and workshops, we aim to enhance cognitive development, foster problem-solving skills, and inspire a lifelong passion for discovery.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
