import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const JSClassInheritanceIntro = () => {
  return (
    <>
      <Para>
        The <BI>extends</BI> <I>keyword</I> is used to create a <I>class</I> as
        a child of another <I>class</I>, this mechanism is called
        <B>inheritance</B>. If there's a<Space /> <I>constructor</I> present in
        the subclass, it needs to first call <I>super()</I>
        <Space /> before using <BI>this</BI>.
      </Para>

      <Para>
        <Heading as='h3'>Base/Parent/Inherited Class</Heading>
        <Para>
          This is the <I>class</I> which will be used as a base for creating
          child
          <I>classes</I>. The basic role of <BI>base class</BI> is to contain
          <Space /> <I>common functionalities</I>, which can be used by
          <BI>multiple child classes</BI>.
        </Para>

        <Code>
          {`class Vehicle {
  constructor(vehicleType, make, wheels) {
    this.vehicleType = vehicleType;
    this.make = make;
    this.wheels = wheels;
  }

  showVehicleInfo() { 	
    console.log(\`\${this.make} \${this.vehicleType} have \${this.wheels} wheels\`);
  }
}
`}
        </Code>
      </Para>

      <Para>
        <Heading as='h3'>Child/Derived Class</Heading>
        <Para>
          This is the <I>class</I> which <BI>extends</BI> the functionality of
          the <I>base class</I>. The role of a <I>derived class</I> is to
          perform more specialized tasks. Derived <I>class</I>
          <B>uses/overrides</B> the <I>base class</I> members, based on the
          need.
        </Para>

        <Para>
          <BI>super()</BI>: Calling <I>super()</I> is important. It calls the
          parent class <I>constructor</I> with the list of passed <Space />
          <I>arguments</I>. The <BI>super</BI> can also be used to call
          <B>public</B> <I>properties/methods</I> of the parent <I>class</I>.
        </Para>

        <Para>
          <IU>Example 1:</IU>

          <Para>
            In below example, the <BI>showVehicleInfo()</BI> is not defined in
            <BI>Bike class</BI>, but still this works, because it was <Space />
            <I>inherited</I> from the base class <BI>Vehicle</BI>.
          </Para>

          <Code>{`class Bike extends Vehicle {
  constructor(make) {
    super("Bike, make, 2);
  }
}

const bike = new Bike("Honda");
bike.showVehicleInfo()  // "Honda Bike have 2 wheels"`}</Code>
        </Para>

        <Para>
          <IU>Example 2:</IU>
          <Para>
            In below example, the <BI>showVehicleInfo()</BI> is not defined in
            <BI>Car class</BI>, but still this works, because it was <Space />
            <I>inherited</I> from the base class <BI>Vehicle</BI>.
          </Para>

          <Code>
            {`class Car extends Vehicle {
  constructor(make) {
    super("Car", make, 4);
  }
}

const car = new Car("Maruti");
car.showVehicleInfo() // "Maruti Car have 4 wheels"`}
          </Code>
        </Para>
      </Para>
    </>
  );
};

export default JSClassInheritanceIntro;
