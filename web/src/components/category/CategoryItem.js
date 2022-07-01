import React from 'react';
import { buttonType } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import Button from '../buttons/Button';
import MyPortableText from '../MyPortableText';
import { Title } from '../typography/Title';

const CategoryItem = ({ title, description, slug }) => (
  <CategoryItemStyles>
    <Title className="title">{title}</Title>
    <div className="text">
      <MyPortableText value={description} />
    </div>
    <Button to={`/categories/${slug.current}`} variant={buttonType.outline}>
      Explore Category
    </Button>
  </CategoryItemStyles>
);

export default CategoryItem;
