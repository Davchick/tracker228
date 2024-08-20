import Project from "../components/Project";

const InBox = () => {
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="font-bold text-2xl">InBox</h2>
      
      <div className="relative mt-1">
        <input
          className="pl-14 pr-4 w-[490px] bg-bg-secondary rounded-lg h-11 placeholder-current"
          placeholder="Поиск"
          type="text"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 22 22"
          className="absolute top-1/4 left-5"
        >
          <path fill="url(#pattern0_0_81)" d="M0 0H22V22H0z"></path>
          <defs>
            <pattern
              id="pattern0_0_81"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use transform="scale(.03333)" xlinkHref="#image0_0_81"></use>
            </pattern>
            <image
              id="image0_0_81"
              width="30"
              height="30"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADY0lEQVRIDe1WW2wMYRQ+Z2ZnNxJJU/VQJCKkIkEIXokqFXVpt2FDCREiIRHi8t5XlyZ4cYl4U9Jg25CKKpvwInGLaHhoVERQolqhiZ2dneM7k1Z2urPTS9STyTlzzvnP5fvnn3/OP0T/r3+0AjwcTmtra6wvHd3ExHExaCEJFXs5TL0k8lyYksWWfa2qqirtjY/wFgp8ueXeJhY6jlozKOTCpN6K0NG6+IrrIWE+VyBwU1OT6VglDcR0YCC6A8Uv4YnbiPmzjhkZKhVDVgnJLthzwYT4U5F0z5FEIpH17JBbJMjnxEqOYUkV1MZSHrbSPWcDin1FbgcmeQaT3AfQBuQczERLHIwfBYdS3hM3Jttr8FRJZNnEsq6ueuVd6MPS1eS9SpfpJgItcHVdTYXqUIPJyB3G7KMAPaljIrx/pKAavzle0Yb3fBA648kbzp9/ohOAGUw+4ExsUi3CZoFfdr54cBFyVGRlei4g4RWWvWxi6fca6AXJB0xieMHYSBfr6+vdglkFHLoPNNdzC3m1PD3g5gNmkUUaw252RO9VY4cyu+zlYvN4tYb6B20fMJZoijoMJ/Je5Vi437TeDeRNG5CBwg+sXyLCfhXZAjGu5AcW+qho0X5jusqx8AS2B3O9WoVq+ICF+ZkGimGuUjkWZpcqNQ9L9lRlIfYBE7vNGog2uBu72u9TxzCcSqUiyN3jhTF5tTw94OYrbqW/3UDMG/D8sgXLdkOOij71ZQ8gYQ4aSOfP7qJQYEagj8baMhtb2neg211ifMhuVjZsq115y1d4iJEHrP7G5H2cTHIIuo3+d8i0v53T5gA7j9BmzUysZC+7chrt1hCRHitqzkusLe/OC84ZCATWYjhxAO4/FrPk3skUmV2aH/shs3Qj4Z3ugj1wLPJX/BxMhv06YhkrwsADgZHo0ZXm9o1CfALGDAq5sLpvcTIdIdNKsWPfRehifc+RCJUn1ld8gJ1HocAarb8+vZloHH8ia9BflmBsJlipi4QfM7u3i6J28+Cvz+VbD4vZSbd5sUKdhcCHBVaE0fJQcDayy7dUV37MrWPkGn9L37puaW9atAnJE/T/MhEzdaWlbWpu/XEBVoCd8fI+x82uhd4Bng3wJOQfGjdgRdheu/qL4zoV+CQfwe4H/6d/vwK/AX5/J23B+eP9AAAAAElFTkSuQmCC"
            ></image>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  );
};

export default InBox;
