import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PeopleWorkedWith.css';
import { motion } from 'framer-motion';

const timelineData = [
  {
    id: 1,
    position: 'left',
    title: 'Sai Group of Institution',
    subtitle: 'BCA (Bachelor of Computer Applications)',
    description: 'Pursuing final semester of BCA with focus on web development, programming, and real-world full stack projects',
    date: '2022 - 2025',
  },
  {
    id: 2,
    position: 'right',
    title: 'Shri Laxman Vidhalaya Inter College',
    subtitle: 'Class 12th',
    description: 'Completed Class 12th with PCM stream, building strong analytical and technical problem-solving skills.',
    date: '2021 - 2022',
  },
  {
    id: 3,
    position: 'left',
    title: 'Shri Laxman Vidhalaya Inter College',
    subtitle: 'Class 10th',
    description: 'Completed Class 10th under the Uttarakhand Board with a strong foundation in academics and computers.',
    date: '2019 -  2020',
  },
  // {
  //   id: 4,
  //   position: 'right',
  //   title: 'PERSON 4 NAME',
  //   subtitle: 'Their Role/Title',
  //   description: 'A brief description of your work or interaction with this person.',
  //   date: 'JAN 2023 - PRESENT',
  // },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const PeopleWorkedWith = () => {
  return (
    <div className="people-worked-with-section py-5">
      <div className="container">
        <motion.p className='text-center text-light fs-5'>
          Resume
        </motion.p>
        <hr className="divider mb-4" />
        <motion.h6
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          People I've Worked With
        </motion.h6>

        <div className="timeline">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${item.position}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <div className="timeline-circle">
                <p className="mb-0 text-center small">Date <br />{item.date}</p>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} className="timeline-content">
                
                <h3>{item.title}</h3>
                <h6>{item.subtitle}</h6>
                <p>{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleWorkedWith;
