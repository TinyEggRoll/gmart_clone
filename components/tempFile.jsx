<Container
                    sx={{
                        display: 'flex',
                        bgcolor: 'backGround.main',
                        height: '2000px',
                        pt: '1.875rem',
                    }}
                    maxWidth="xl">
                    {/* Left Side of Main Screen */}
                    <Box
                        sx={{
                            width: '20%',
                            mr: '1rem',
                            maxHeight: '100vh',
                            position: 'sticky',
                            top: '6rem',
                        }}>
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
                            }}>
                            <DepartmentSection
                                imgSrc="/images/department_icons/alcohol.svg"
                                department="Alcohol"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/beverage.svg"
                                department="Beverage"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/bread_bakery.svg"
                                department="Bread &amp; Bakery"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/cooking_wine_oil_vinegar.svg"
                                department="Cooking Wine &amp; Oil &amp; Vinegar"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/dairy_eggs.svg"
                                department="Dairy &amp; Eggs"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/dried_vegetable.svg"
                                department="Dried Vegetables"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/frozen.svg"
                                department="Frozen"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/grain.svg"
                                department="Grain"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/housewares.svg"
                                department="Housewares"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/meat_seafood.svg"
                                department="Meat &amp; Seafood"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/noodle.svg"
                                department="Noodle"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/produce.svg"
                                department="Produce"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/refrigerated.svg"
                                department="Refrigerated"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/sauce_paste.svg"
                                department="Sauce &amp; Paste"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/seasoning_spices.svg"
                                department="Seasoning &amp; Spices"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/seaweed.svg"
                                department="Seaweed"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/snack_candy.svg"
                                department="Snack &amp; Candy"
                            />
                            <DepartmentSection
                                imgSrc="/images/department_icons/tea_coffee_breakfast.svg"
                                department="Tea &amp; Coffee &amp; Breakfast"
                            />
                        </Box>
                    </Box>

                    {/* Right Side of Main Screen */}
                    <Box sx={{ width: '80%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                            }}>
                            <FilterButton filterName="All" />
                            <FilterButton filterName="Sake &amp; Soju" />
                            <FilterButton filterName="Beer" />
                            <FilterButton filterName="Wine" />
                        </Box>
                    </Box>
                </Container>