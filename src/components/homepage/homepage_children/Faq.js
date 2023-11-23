import "../Homepage.css";

const Faq = () => {
  return (
    <div id="faq">
      <div className="faq-container">
        <h3>What type of pattern will I be able to generate? </h3>
        <p className="faq-answer">The generator currently supports:</p>
        <ul id="faq-list-answer">
          <li>Raglan jumpers knitted top-down</li>
          <li>Bottom-up jumpers with seamless yoke</li>
          <li>
            Seamed drop-shoulder jumpers, with two separate arm pieces and a
            body
          </li>
        </ul>
        <p className="faq-answer">
          Different levels of ease are also included - you can add your own
          manually, or pick a standardised amount. Over time, I am hoping to
          increase the complexity of the calculator and add more shapes/options
          - the first things I’ll be working on is support for
          stranded-colourwork patterns, with an option to input over how many
          stitches the charts are worked.
        </p>
      </div>

      <div className="faq-container">
        <h3>What system do you use to calculate the patterns?</h3>
        <p className="faq-answer">
          This website mostly relies on Elizabeth’s Zimmerman’s approach to
          calculate the size of the jumper. If you would like to find out more
          about it, you can follow{" "}
          <a
            className="ref-link"
            href=" https://tutorials.knitpicks.com/percentage-system/"
          >
            this link.
          </a>
        </p>
        <p>
          It’s based on percentages to keep the whole garment proportional, and
          yields great results! I also offer extra customisation options, such,
          for instance, using your wrists, arms and shoulders measurements to go
          off instead of a percentage of the body if you’d prefer.
        </p>
      </div>

      <div className="faq-container">
        <h3>How detailed/beginner-friendly will the patterns be?</h3>
        <p className="faq-answer">
          The patterns produced are beginner-friendly, and explain all the
          construction steps, so you could use this generator for your first
          jumper! I would recommend picking the top-down raglan jumper pattern
          if this is your first foray into knitting a jumper - they are very
          easy to adjust as you go, as you can try them on as you knit them. I
          will try my best to provide your with links to videos explaining the
          techniques used as well.
        </p>
        <p>
          Alternatively, if you are a more experienced knitter/pattern designer
          who just wants some maths done to accelerate your design process, I
          will put down all the stitch numbers/pieces sizes/etc. at the top of
          the pattern, so you can use them to jump-start your process/calculate
          different sizes for your patterns.
        </p>
      </div>

      <div className="faq-container">
        <h3>Why create an account?</h3>
        <p className="faq-answer">
          Creating an account will let you save the patterns you generate, as
          well as your measurements, so that it's even easier to use the
          generator the next time, or try different pattern permutation quickly.
        </p>
        <p>
          I do not want to manage sensitive information, so all that is needed
          to register is a unique username - your patterns and measurements will
          be tied to that username only. Think of it like creating a virtual
          folder of patterns - all you have to do is remember what name you gave
          it.
        </p>
      </div>
    </div>
  );
};

export default Faq;
