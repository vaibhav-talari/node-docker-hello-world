FROM tomcat:9.0

ADD sample.war /usr/local/tomcat/webapps/

EXPOSE 8000

CMD ["catalina.sh","run"]
