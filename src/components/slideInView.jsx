import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlideInView = ({ children, delay = 0, onInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false, // so it animates again on scroll up
  });

  if (onInView && inView) {
    onInView();
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 300 }} // MUCH deeper from bottom
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }} // animate up/down on scroll
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInView;