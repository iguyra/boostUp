const Counter = ({}) => {
  return (
    <section className="numbers__section">
      <div className="numbers__join">JOIN</div>

      <div class="numbers">
        <span class="numbers__window">
          <span
            class="numbers__window__digit numbers__window__digit--1"
            data-fake="8642519073"
          >
            8
          </span>
        </span>
        <span class="numbers__window">
          <span
            class="numbers__window__digit numbers__window__digit--2"
            data-fake="5207186394"
          >
            5
          </span>
        </span>
        <span class="numbers__window">
          <span
            class="numbers__window__digit numbers__window__digit--3"
            data-fake="8395216407"
          >
            2
          </span>
        </span>
      </div>

      <div className="numbers__other">students</div>
    </section>
  );
};

export default Counter;
