# nodejs-homework-1-cli-app 

# Examples of running commands in the terminal

<img width="1505" alt="Снимок экрана 2023-07-12 в 00 31 11" src="https://github.com/Victoria-Fedkova/nodejs-homework-1-cli-app/assets/63882255/846398d5-ab62-4e65-8445-d6ac0ce53681">


# Get and display the entire list of contacts in the form of a table (console.table)
node index.js --action list

# Get contact by id
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

# Add the contact
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Delete the contact
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

# Update the contact
node index.js --action update -i rsKkOQUi80UsgVPCcLZZW -n Victoria Fedkova -e vf@mail.com -p 067-887-7887
