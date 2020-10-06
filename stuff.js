function sq(t,len){
t.fd(len);t.rt(90);t.fd(len);t.rt(90);
t.fd(len);t.rt(90);t.fd(len);t.rt(90);
}

function star(t,num,len){
	for(let j=1;j<=num;j=j+1){
	t.fd(len);t.bk(len);t.rt(360/num);
	}
	}