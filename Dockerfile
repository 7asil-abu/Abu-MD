FROM quay.io/afx-abu/abu-multi-latest
RUN git clone https://github.com/7asil/Abu-MD /Jsl/Abu/
WORKDIR /Jsl/Abu/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js", "--max_old_space_size=2560"]
