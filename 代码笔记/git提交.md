…or create a new repository on the command line
echo "# SomeIdea" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Calebcai/SomeIdea.git
git push -u origin main
                
…or push an existing repository from the command line
git remote add origin https://github.com/Calebcai/SomeIdea.git
git branch -M main
git push -u origin main


git pull 添加到远程仓库
git remote rm origin 删除已添加的远程仓库地址
git remote add xxxxx

git初始化仓库步骤
1.先获取ssh，获取到ssh后配置git仓库
2.有了git仓库后 初始化本地项目，然后通过git init , git add . , git commit之后
3.进行git remote add origin https://gitee.com/calebcai/graduation-project.git
4.关联本地和远程 git push -u origin master 如果报错 可以使用git pull --rebase origin master

报错 报错! [rejected] master -> master (fetch first)；这个是因为你的远程仓库中有新版本，你需要先拉取之后再提交，但是你如果是第一次提交，在创建远程库的时候创建了readme.md文件的话
1.正确的解决方法就是将你的仓库和你的gitee合并了，用填充的方法，即：
git pull --rebase origin master
2.输入上述命令，其中origin代表你的仓库uri，后面的master表示将当前的提交到本地仓库的内容和远程仓库合并；再输入如下命令，即可将本地仓库推送到远程仓库：git push origin master