const chalk = require('chalk')
var readlineSync=require('readline-sync')
const userName=chalk.green(
    readlineSync.question(
        chalk.cyan("May I know your " + chalk.yellow("name? "))
    )
)
const dob = readlineSync.question(
            chalk.magenta("Hi, ") + userName+"!\n"+chalk.cyan("Please enter your ")+chalk.yellow("date of birth in (dd/mm/yyyy) format: ")
            )
const dobArray=dob.split("/")
const birthYear=Number(dobArray[2])
function leapYear(birthYear){
    if(birthYear%4===0){
        if(birthYear%100===0){
            if(birthYear%400===0){
                console.log(
                    chalk.magenta("Your Birth Year: ") + chalk.yellow(birthYear) + chalk.green("\nIt is a leap year") + chalk.bgBlack(chalk.greenBright("\nYou are born in Leap Year"))
                )
            }
            else{
                console.log(
                    chalk.magenta("Your Birth Year: ") + chalk.yellow(birthYear) + chalk.red("\nIt is not a leap year") + chalk.bgBlack(chalk.redBright("\nYou aren't born in Leap Year"))
                )
            }
        }
        else{
            console.log(
                chalk.magenta("Your Birth Year: ") + chalk.yellow(birthYear) + chalk.green("\nIt is a leap year") + chalk.bgBlack(chalk.greenBright("\nYou are born in Leap Year"))
            )
        }
    }
    else{
        console.log(
            chalk.magenta("Your Birth Year: ") + chalk.yellow(birthYear) + chalk.red("\nIt is not a leap year") + chalk.bgBlack(chalk.redBright("\nYou aren't born in Leap Year"))
        )
    }
}
leapYear(birthYear)


