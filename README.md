# nodejs-homework-1-cli-app 

# Examples of running commands in the terminal

# Get and display the entire list of contacts in the form of a table (console.table)
node index.js --action list

<img width="892" alt="list" src="https://github.com/Victoria-Fedkova/nodejs-homework-1-cli-app/assets/63882255/0ab88b17-0582-49f8-b616-21096b19f650">

# Get contact by id
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

<img width="886" alt="get" src="https://github.com/Victoria-Fedkova/nodejs-homework-1-cli-app/assets/63882255/9738f4dc-a73f-41ba-b95f-c11b819f0c92">

# Add the contact
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

<img width="1049" alt="add" src="https://github.com/Victoria-Fedkova/nodejs-homework-1-cli-app/assets/63882255/446459a0-870a-47d7-b0f2-25e670c49639">

# Delete the contact
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

<img width="951" alt="remove" src="https://github.com/Victoria-Fedkova/nodejs-homework-1-cli-app/assets/63882255/5ff07bc2-dc40-4733-ba04-5ab8ec979cd9">

# Update the contact
node index.js --action update -i rsKkOQUi80UsgVPCcLZZW -n Victoria Fedkova -e vf@mail.com -p 067-887-7887

<img width="1197" alt="update" src="https://github.com/Victoria-Fedkova/nodejs-homework-1-cli-app/assets/63882255/ce31ae54-37d0-430b-82e1-8ca204e89b37">
