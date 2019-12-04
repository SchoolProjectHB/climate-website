import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';

// import Container from 'react-bootsrtap/Container';
// import Row from 'react-bootsrtap/Row';
// import Col from 'react-bootsrtap/Col';

class Ordlista extends Component {
  render() {
    return (
      <div class="ui accordion">
  <div class="title">
    <i class="dropdown icon"></i>
    What is a dog?
  </div>
  <div class="content">
    <p class="transition hidden">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    What kinds of dogs are there?
  </div>
  <div class="content">
    <p class="transition hidden">There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    How do you acquire a dog?
  </div>
  <div class="content">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </div>
</div>
    );
  }
}

export default Ordlista;
