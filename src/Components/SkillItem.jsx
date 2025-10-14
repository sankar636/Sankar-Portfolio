import React, {useEffect, useState} from "react";
import { LinearProgress } from '@mui/material';
import '../App.css'
function AnimateProgressbar({ value, ...props }) {
        const [animate, setAnimate] = useState(0);

        useEffect(() => {

            if (animate < value) {

                const timer = setTimeout(() => setAnimate(animate + 2), 10);
                return () => clearTimeout(timer);
            }

        }, [animate, value]);
        return <LinearProgress variant="determinate" className="progress-bar" value={animate} {...props}
            sx={{
                '& .MuiLinearProgress-bar': {
                    backgroundImage: 'linear-gradient(to right, #ffffff, #e66465)',
                },
            }}
        />
    }

const SkillItem = ({name, progress, icons}) => {
  return (
    <>
      <div className="skill-item">
        <div className="skill-sub-item">
          {icons}
          <span className="skills-title"> {name} </span>
        </div>

        <div className="progress-container">
          <AnimateProgressbar value={progress} />
          <div className="Progress-value"> {progress} % </div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
