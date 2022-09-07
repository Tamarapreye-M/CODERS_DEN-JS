// web storages 

//Exercise level 1

// let firstName = "Tamara";
// let lastName = "Michael";
// let age = 2008;
// let country = "Nigeria"
// let city = "Lagos"

localStorage.setItem("firstName", "Tamara");
localStorage.setItem("lastName", "Michael");
localStorage.setItem("age", 2008);
localStorage.setItem("country", 'Nigeria');
localStorage.setItem("city", "Lagos");


// Exercise level 2
let student = {
    "first name": "John",
    "last name": "Doe",
    age: 28,
    skills: ['HTML', 'CSS'],
    country: "United States",
}
localStorage.setItem('student', JSON.stringify(student));


// Exercise level 3

let personAccount = {
    firstName: "Omobolaji",
	lastName: "Anosike",
	incomes: [
		{
			name: "salary",
			description: "monthly salary at corporate job",
			amount: 4000000,
		},
		{
			name: "realEstate",
			description: "returns on real estate investment, rent paid by tenants",
			amount: 6000000,
		},
		{
			name: "hirePurchase",
			description:
				"returns on hire purchases businesses, with vehicles. Instalmental",
			amount: 5000000,
		},
	],
	expenses: [
		{
			name: "necessaries",
			description: ["food", "utilities", "bills"],
			amount: 4500000,
		},
		{
			name: "gifts",
			description: [
				"givings in church",
				"givings to friends",
				"givings to family",
				"givings to wifey",
			],
			amount: 500000,
		},
		{
			name: "carreer expenses",
			description: ["courses", "further education", "workshops and events"],
			amount: 500000,
		},
	],
	totalIncome: function () {
		return this.incomes.reduce((a, c) => a + c, 0);
	},
	totalExpense: function () {
		return this.expenses.reduce((a, c) => a + c, 0);
	},
	accountInfo: function () {
		let savings = 0.4 * this.accountBalance();
		let current = this.accountBalance() - savings;
		return { savings, current };
	},
	addIncome: function () {
		this.incomes.push({
			name: "stocks",
			description: "returns from investments in stocks",
			amount: 100000,
		});
		return this.incomes;
	},
	addExpense: function () {
		this.expenses.push({
			name: "vacations and staycations",
			description:
				"travelling, fine dining, adventourous and romantic dates at resorts, hotels and fun places",
			amount: 3500000,
		});
		return this.expenses;
	},
	accountBalance: function () {
		return this.totalIncome() - this.totalExpense();
	},
}

localStorage.setItem("Personal Info", JSON.stringify(personAccount))