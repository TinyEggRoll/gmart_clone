/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Box, Chip, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { MongoClient } from 'mongodb';
import { useSelector } from 'react-redux';
import { GetStaticProps } from 'next';
import TopNavBar from '../../components/TopNavBar';
import BottomNavBar from '../../components/BottomNavBar';
import DepartmentSection from '../../components/DepartmentSection';
import FilterButton from '../../components/FilterButton';
import Footer from '../../components/Footer';
import SingleProduct from '../../components/SingleProduct';

const Department = (props) => {
  const { arrayOnSaleProducts } = props;
  const router = useRouter();
  const { arrayOfDepartments, arrayOfProducts } = useSelector(
    (state) => state.departments
  );

  // Filters each department in the array by removing ampersand symbols, replacing spaces with underscores, and removing uppercase characters
  // Then try to match this updated department name with the URL to return the index in the array.

  const departmentIndex = arrayOfDepartments.findIndex(
    (department) =>
      department.name.replace(/&/g, '').replace(/ +/g, '_').toLowerCase() ===
      router.query.department
  );

  return (
    <>
      <Box sx={{ mt: '5rem', bgcolor: 'backGround.main', minHeight: '100vh' }}>
        <TopNavBar />
        <BottomNavBar />

        {/* Main Content Area */}
        <Container
          sx={{
            display: 'flex',
            bgcolor: 'backGround.main',
            minHeight: '100vh',
            pt: '1.875rem',
          }}
          maxWidth="xl"
        >
          {/* Left Side of Main Screen | Departments List */}
          <Box
            sx={{
              width: '20%',
              mr: '1rem',
              maxHeight: '100%',
              position: 'sticky',
              top: '6rem',
              alignSelf: 'flex-start',
            }}
          >
            <Typography sx={{ fontWeight: '500', mb: '1rem' }} variant="h4">
              Departments
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '90%',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                  width: 5,
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#c4c4c4',
                },
              }}
            >
              {/* Skips the Today's Deals department in array */}
              {arrayOfDepartments.map((department, index) => {
                if (index !== 0) {
                  return (
                    <DepartmentSection
                      key={department.name}
                      iconSrc={department.iconSrc}
                      name={department.name}
                    />
                  );
                }
                return null;
              })}
            </Box>
          </Box>

          {/* Right Side of Main Screen | Categories | List of Items */}
          <Box sx={{ width: '80%' }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {/* Display List of Categories If Department is Valid */}
              {departmentIndex !== -1 && (
                <>
                  <NextLink href={`/department/${router.query.department}`}>
                    <Chip
                      sx={{
                        mr: '1rem',
                        borderRadius: '.625rem',
                        color: 'textWhite.main',
                        bgcolor: 'primary.main',
                        p: '1rem .3125rem',
                        ':hover': {
                          color: 'textWhite.main',
                          bgcolor: 'primary.main',
                        },
                      }}
                      label="All"
                      clickable
                    />
                  </NextLink>
                  {arrayOfDepartments[departmentIndex].categories.map(
                    (category) => (
                      <FilterButton key={category} filterName={category} />
                    )
                  )}
                </>
              )}
            </Box>
            {/* Displays either On Sale Products, or Respective Department Products Depending On Props */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {arrayOnSaleProducts === 'no'
                ? arrayOfProducts.map((product) => (
                    <SingleProduct
                      key={product.productID}
                      pic={product.pic}
                      price={product.price}
                      productID={product.productID}
                      title={product.title}
                      unit={product.unit}
                    />
                  ))
                : arrayOnSaleProducts.map((product) => (
                    <SingleProduct
                      key={product.productID}
                      pic={product.pic}
                      price={product.price}
                      productID={product.productID}
                      title={product.title}
                      unit={product.unit}
                      oldPrice={product.oldPrice}
                    />
                  ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};
// Determines What Dynamic URL is Allowed, with No Fallbacks
export async function getStaticPaths() {
  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const listOfDepts = db.collection('ListOfDepts');
  const arrayOfDepts = await listOfDepts.find({}).toArray();
  client.close();

  return {
    fallback: false,
    paths: arrayOfDepts[0].array.map((department) => ({
      params: { department },
    })),
  };
}
// Checks to see if URL is 'todays_deals', then hit db and return us a list of on sale products, else
// assigns a no value to prop
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const uri = process.env.MONGODB_URI;

  if (params.department === 'todays_deals') {
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const dailyDealsCollection = db.collection('TodayDeals');
    const arrayOnSaleProducts = await dailyDealsCollection.find().toArray();
    client.close();
    return {
      props: {
        arrayOnSaleProducts: arrayOnSaleProducts.map((product) => ({
          pic: product.pic,
          price: product.price,
          productID: product.productID,
          unit: product.unit,
          title: product.title,
          oldPrice: product.oldPrice,
          id: product._id.toString(),
        })),
      },
    };
  }

  return {
    props: {
      arrayOnSaleProducts: 'no',
    },
  };
};

export default Department;
