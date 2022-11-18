data <- read.csv("D:\\thapar\\Clt-data.csv") 
data
dim(data)
head(data,10)

mean(data$Wall.Thickness)
hist(data$Wall.Thickness)
abline(v=mean(data$Wall.Thickness),col="pink",lwd=3)
sd(data$Wall.Thickness)


s30<- c()
s50<- c()
s500<- c()
n=9000
for(i in 1:n)
{
  s30[i]= mean(sample(data$Wall.Thickness,30,replace=TRUE))
  s50[i]=  mean(sample(data$Wall.Thickness,50,replace=TRUE))
  s500[i]=  mean(sample(data$Wall.Thickness,500,replace=TRUE))
}
par(mfrow=c(1,3))

hist(s30,col="lightgreen",main="Sample Size= 10",xlab="wall thickness")
abline(v=mean(s30),col="Red")
hist(s50,col="lightgreen",main="Sample Size= 10",xlab="wall thickness")
abline(v=mean(s50),col="Red")
hist(s500,col="lightgreen",main="Sample Size= 10",xlab="wall thickness")
abline(v=mean(s500),col="Red")
